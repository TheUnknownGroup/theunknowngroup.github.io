use dioxus::prelude::*;
use crate::components::navbar::NavBar;

#[component]
pub fn TempConv() -> Element {
    rsx! {
        NavBar {}
        div {
            class: "bg-blue-background h-screen",
        }
    }
}