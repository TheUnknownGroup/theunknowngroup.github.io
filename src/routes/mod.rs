pub mod main_page;
pub mod links;
pub mod news;
pub mod temp_converter;
use dioxus::prelude::*;
use main_page::Home;
use links::Links;
use news::News;
use temp_converter::TempConv;

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
}