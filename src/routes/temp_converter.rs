use dioxus::prelude::*;
use crate::components::*;

#[component]
pub fn TempConv() -> Element {
    let mut step = use_signal(|| 0);
    let mut from_unit = use_signal(String::new);
    let mut conv = use_signal(String::new);
    let mut deg = use_signal(String::new);
    let mut result = use_signal(String::new);
    let mut error = use_signal(String::new);
    
    rsx! {
        NavBar {}
        div {
            class: "bg-blue-background h-screen",
            if step() >= 0 {
                h1 { 
                    class: "select-none zilla pl-[20px] pt-[7px] text-[25px]", 
                    "Welcome! What are we converting today?" 
                },
                form {
                    onsubmit: move |e| {
                        e.prevent_default();
                        let inp = from_unit().trim().to_lowercase();
                        if ["celcius", "c"].contains(&inp.as_str()) {
                            from_unit.set("C".to_string());
                            error.set(String::new());
                            step.set(1);
                        } else if ["fahrenheit", "f"].contains(&inp.as_str()) {
                            from_unit.set("F".to_string());
                            error.set(String::new());
                            step.set(1);
                        } else if ["kelvin", "k"].contains(&inp.as_str()) {
                            from_unit.set("K".to_string());
                            error.set(String::new());
                            step.set(1);
                        } else {
                            error.set("Invalid input. Enter Kelvin, Fahrenheit, or Celcius".to_string());
                        }
                    },
                    input {
                        value: "{from_unit}",
                        class: "ml-[20px] border p-2 bg-white",
                        oninput: move |e| from_unit.set(e.value()),
                        placeholder: "Celcius, Fahrenheit or Kelvin",
                        readonly: step() > 0,
                    },
                    button {
                        r#type: "submit",
                        class: "border ml-2 p-2 bg-gray-300",
                        disabled: step() > 0,
                        "Submit"
                    }
                }
            },
            if step() >= 1 {
                h1 { 
                    class: "select-none zilla pl-[20px] pt-[7px] text-[25px]", 
                    "Which unit do you want to convert {from_unit}?" 
                },
                form {
                    onsubmit: move |e| {
                        e.prevent_default();
                        let inp = conv().trim().to_lowercase();
                        let valid = match from_unit().as_str() {
                            "C" => ["cf", "ck"].contains(&inp.as_str()),
                            "F" => ["fc", "fk"].contains(&inp.as_str()),
                            "K" => ["kc", "kf"].contains(&inp.as_str()),
                            _ => false,
                        };
                        if valid {
                            conv.set(inp);
                            error.set(String::new());
                            step.set(2);
                        } else {
                            error.set("Invalid conversion typ. Type CF, CK, FC, FK, KC or KF".to_string());
                        }
                    },
                    input {
                        value: "{conv}",
                        class: "ml-[20px] border p-2 bg-white",
                        oninput: move |e| conv.set(e.value()),
                        placeholder: "Example: CF",
                        readonly: step() > 1,
                    },
                    button {
                        r#type: "submit",
                        class: "border ml-2 p-2 bg-gray-300",
                        disabled: step() > 1,
                        "Submit"
                    }
                }
            },
            if step() >= 2 {
                h1 {
                    class: "select-none zilla pl-[20px] pt-[7px] text-[25px]", 
                    "Input the degree you want to convert."
                },
                form {
                    onsubmit: move |e| {
                        e.prevent_default();
                        let inp = deg();
                        if let Ok(deg) = inp.trim().parse::<f64>() {
                            let convert = match conv().as_str() {
                                "cf" => (deg * 1.8) + 32.0,
                                "ck" => deg + 273.15,
                                "fc" => (deg - 32.0) / 1.8,
                                "fk" => (deg - 32.0) * 5.0 / 9.0 + 273.15,
                                "kc" => deg - 273.15,
                                "kf" => (deg - 273.15) * 9.0 / 5.0 + 32.0,
                                _ => return,
                            };
                            result.set(format!("{:.0}", convert));
                            error.set(String::new());
                        } else {
                            error.set("Please enter a valid number".to_string());
                        }
                    },
                    input {
                        value: "{deg}",
                        class: "ml-[20px] border p-2 bg-white",
                        oninput: move |e| deg.set(e.value()),
                        r#type: "number",
                        placeholder: "Enter Temperature",
                    },
                    button {
                        r#type: "submit",
                        class: "border ml-2 p-2 bg-gray-300",
                        "Submit"
                    }
                }
            }

            if !error().is_empty() {
                p {
                    class: "select-none zilla pl-[20px] pt-[7px] text-[25px]",
                    "{error}"
                }
            }

            if !result().is_empty() {
                p {
                    class: "select-none zilla pl-[20px] pt-[7px] text-[25px]",
                    "Your converted temperature is: {result} ",
                    if conv() == "cf" || conv() == "kf" {
                        " F°"
                    } else if conv() == "ck" || conv() == "fk" {
                        " K°"
                    } else {
                        " C°"
                    }
                }
            }
        }
    }
}