import test from "ava";
import { Nuxt, Builder } from "nuxt";
import { resolve } from "path";

let nuxt = null;

test.before("Init Nuxt.js", async t => {
    const rootDir = resolve(__dirname, "..");
    let config = {};
    try {
        config = require(resolve(rootDir, "nuxt.config.js"));
    } catch (e) {}
    config.rootDir = rootDir;
    config.dev = false;
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    nuxt.listen(4000, "localhost");
});

test("Route / exits and render HTML", async t => {
    let context = {};
    const { html } = await nuxt.renderRoute("/", context);
    t.true(html.includes('<h1 class="red">Hello world!</h1>'));
});

test("Route / exits and render HTML with CSS applied", async t => {
    const window = await nuxt.renderAndGetWindow("http://localhost:4000/");
    const element = window.document.querySelector(".red");
    t.not(element, null);
    t.is(element.textContent, "Hello world!");
    t.is(element.className, "red");
    t.is(window.getComputedStyle(element).color, "red");
});

test.after("Closing server and nuxt.js", t => {
    nuxt.close();
});
