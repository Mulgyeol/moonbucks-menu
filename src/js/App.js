import { $ } from "./utils/utils.js";
import Header from './components/Header.js';
import Main from './components/Main.js';

export default function MoonBucks($target) {
    const render = () => {
        $target.innerHTML = `
        <div class="d-flex justify-center mt-5 w-100">
            <div class="w-100">
                <header class="my-4">
                </header>
                <main class="mt-10 d-flex justify-center">
                </main>
            </div>
        </div>`;
    }

    const mountChildren = () => {
        const $header = $('header');
        const $main = $('main');

        Header($header);
        Main($main);
    }

    const init = () => {
        render();
        mountChildren();
    }

    init();
};
