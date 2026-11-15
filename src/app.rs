use dioxus::prelude::*;

use crate::{components::navbar::NavBar, routes::Route};

#[component]
pub fn Shell() -> Element {
    rsx! {
        div {  
            class: "bg-blue-background h-screen", 
            main {
                NavBar {},
                Outlet::<Route> {}
            }
        }
    }
}