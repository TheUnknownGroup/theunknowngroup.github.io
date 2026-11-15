use dioxus::prelude::*;

use crate::routes::Route;

#[component]
fn RailLink(to: Route, label: &'static str) -> Element {
    rsx!{
        Link {
            to: to.clone(),
            class: "flex items-center text-[20px] last:pr-3 hover:underline decoration-[2px]",
            aria_label: label,
            {label}
        }
    }
}

#[component]
pub fn NavBar() -> Element {
    rsx! {
        div {
            class: "border-b-solid border-b-black border-b-[2px] pl-[10px] pb-[3px] grid grid-cols-[auto_1fr_auto] items-center",
            img {
                src: asset!("/assets/favicon.png"),
                width: 40,
                class: "rounded-sm hover:shadow-[0_0_5px] shadow-white transition-shadow ease-in-out duration-300 mt-[3px]",
            }
            Link {
                to: Route::Home {},
                class: "w-[240px]",
                i {
                    class: "fa-solid fa-book-open select-none ml-2 p-0 text-[16px] hover:text-shadow-[0_0_5px,0_0_5px,0_0_5px] text-shadow-white transition-[text-shadow] ease-in-out duration-300",
                    " The Unknown Group"
                }
            }

            div {
                class: "grid grid-flow-col auto-cols-max gap-3 justify-end",
                RailLink { to: Route::Links {}, label: "Links" },
                RailLink { to: Route::News {}, label: "News" },
                RailLink { to: Route::TempConv {}, label: "Temp Converter" },
            }
        }
    }
}