use dioxus::prelude::*;
use crate::routes::Route;

pub mod routes;
pub mod app;
pub mod components;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Stylesheet { href: MAIN_CSS } document::Stylesheet { href: TAILWIND_CSS },
        document::Script { src: "https://kit.fontawesome.com/42f8b8e338.js", crossorigin: "anonymous" }
        Router::<Route> {}
    }
}
