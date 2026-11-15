use dioxus::prelude::*;
use crate::components::navbar::NavBar;

#[component]
pub fn Links() -> Element {
    rsx! {
        NavBar {},
        div {
            class: "bg-blue-background h-screen p-1",
            div {
                class: "select-none bg-[#637B85] w-[472px] rounded-md pb-2",
                h3 {
                    class: "text-[28px] zilla text-white text-center border-b-[#829199] border-x-0 border-t-0 border mb-2",
                    "Discord"
                },
                a {
                    class: "bg-blue-300 rounded-md px-1.25 zilla text-[25px] p-1 m-2",
                    href: "https://discord.gg/jspNzHYTFn",
                    target: "_blank",
                    "Click here to join the Discord community."
                }
            }
        }
    }
}