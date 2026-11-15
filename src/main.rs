use dioxus::prelude::*;
use crate::routes::Route;

pub mod routes;
pub mod app;
pub mod components;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");
const ROBOTO: Asset = asset!("/assets/fonts/Roboto.ttf");
const ZILLA_SLAB: Asset = asset!("/assets/fonts/ZillaSlab.ttf");

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Stylesheet { href: MAIN_CSS } document::Stylesheet { href: TAILWIND_CSS },
        document::Script { src: "https://kit.fontawesome.com/42f8b8e338.js", crossorigin: "anonymous" }
        style {
            "
            @font-face {{
                font-family: 'Roboto';
                src: url('{ROBOTO}') format('truetype');
                font-weight: 500;
                font-style: normal;
            }}

            @font-face {{
                font-family: 'Zilla Slab';
                src: url('{ZILLA_SLAB}') format('truetype');
                font-weight: 400;
                font-style: normal;
            }}
            "
        }
        Router::<Route> {}
    }
}
