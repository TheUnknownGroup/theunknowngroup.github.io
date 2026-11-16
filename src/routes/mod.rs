pub mod main_page;
pub mod links;
pub mod news;
pub mod temp_converter;
pub mod docs;
pub mod routes;
use dioxus::prelude::*;
use routes::*;

use crate::app::Shell;

#[derive(Debug, Clone, Routable, PartialEq)]
#[rustfmt::skip]
pub enum Route {
    #[layout(Shell)]
        #[route("/")]
        Home {},
        #[route("/links")]
        Links {},
        #[route("/news")]
        News {},
        #[route("/temp_convert")]
        TempConv {},
        #[route("/docs")]
        Docs {},
}