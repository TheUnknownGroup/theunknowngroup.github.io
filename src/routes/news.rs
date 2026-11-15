use dioxus::prelude::*;

use crate::components::navbar::NavBar;

#[component]
pub fn News() -> Element {
    rsx! {
        NavBar {},
        div {
            class: "bg-blue-background h-screen"
        }
    }
}