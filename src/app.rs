use dioxus::prelude::*;

use crate::{routes::Route};

#[component]
pub fn Shell() -> Element {
    rsx! { 
        main {
            Outlet::<Route> {}
        }
    }
}