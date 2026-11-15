use dioxus::prelude::*;

use crate::{components::navbar::NavBar, routes::Route};

#[component]
pub fn Home() -> Element {
    rsx! {
        NavBar {}
        div {
            class: "pl-[20px] pb-[3px] bg-blue-background h-screen",
            h3 {
                class: "text-[22px] roboto pt-1.5",
                "Welcome! \u{1F44B}"
            },
            h3 {
                class: "roboto text-[20px]",
                "Information"
            }
            p {
                class: "text-[20px] ml-[25px] roboto",
                "This the website for ",
                code {
                    "The Unknown Group's"
                }
                " repositories.", br {},
                "This website will be updated everytime there is anything new going on, new repositories, or new members!"
            },
            br {},
            p {
                class: "roboto text-[20px] ml-[25px]",
                "If you need help with any of our software, sites, or little things that are customizible click ",
                Link {
                    to: Route::Docs {},
                    "here."
                }
            },
            br {},
            footer {
                class: "zilla text-[19px]",
                "Made by Devon Kaylor"
            }
        }
    }
}