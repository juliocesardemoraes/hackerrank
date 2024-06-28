import path from "path";
import { chromium } from "playwright";

import fs from "fs";

// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one
// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

let isLoggedIn: any = false;
const MainURL = "https://www.hackerrank.com";
const URL = `${MainURL}/interview/preparation-kits/one-month-preparation-kit/one-month-week-two/challenges`;
const exercisesURL = [];

const getPageContent = async (page, URL_INDEX) => {
  await page.goto(`${MainURL}${URL_INDEX}`);
  if (isLoggedIn === false) {
    await page.click('text="Log in"');
    const inputUser = 'input.c-gbnqRc[type="text"]';
    const inputPassword = 'input.c-gbnqRc[type="password"]';

    await page.waitForSelector(inputUser);
    await page.fill(inputUser, process.env.email);
    await page.waitForSelector(inputPassword);
    await page.fill(inputPassword, process.env.password);
    await page.click(
      "button.c-cUYkx.c-cUYkx-dshqME-variant-primary.c-cUYkx-fGHEql-isFullWidth-true.c-cUYkx-ABeol-size-large.hr-inline-flex.hr-justify-center.hr-align-center.hr-p-y-1"
    );
    await page.waitForTimeout(2000);
  }
  const innerHTML = await page.$eval(
    "div.challenge-body-html",
    (el) => el.innerHTML
  );

  // Find the div element by class name and other attributes
  const divElement = "div.monaco-scrollable-element";

  // Click on typescript

  const langContainer = ".css-84jzhn-indicatorContainer";
  await page.click(langContainer, { timeout: 2000 });
  // await page.click('#react-select-2-option-26:text("TypeScript")', {
  //   timeout: 10000,
  // });
  // Select the TypeScript option by its text content
  const options = await page.$$(`#select-language-menu [role="option"]`);

  for (const option of options) {
    const textContent = await option.textContent();
    console.log("TEXTCONTENT");
    if (textContent.trim() === "TypeScript") {
      await option.click();
      break;
    }
  }
  await page.waitForTimeout(500);
  isLoggedIn = true;

  // Click on the div to give it focus
  await page.waitForSelector(divElement);
  await page.click(divElement);

  // Press Ctrl+A to select all text inside the div
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");

  await page.keyboard.down("Control");
  await page.keyboard.press("C");
  await page.keyboard.up("Control");

  const code = await page.evaluate(() => navigator.clipboard.readText());

  const regex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const cleanedHtmlContent = innerHTML.replace(regex, "");

  // Define the file path
  let exerciseTitle = (await page.title()).trim();
  exerciseTitle = exerciseTitle.replace(/\s\|/g, "");

  const folderPath = path.join(
    process.cwd(),
    `playwright/exercises/week2/${exerciseTitle}`
  );

  try {
    fs.mkdirSync(folderPath);
  } catch (error) {
    console.log("ERR", error);
  }

  const filePath = path.join(folderPath, "/README.md");
  const filePathCode = path.join(folderPath, "/index.ts");
  const packageJsonPath = path.join(folderPath, "/package.json");

  const addLinksAndH1 = `<h1>${exerciseTitle}</h1><br/><a href="${URL}" target="_blank">Link da tarefa</a><br/><br/>${cleanedHtmlContent}`;

  const packageJsonValue = `{
  "name": "diagonal-difference-hackerrank",
  "version": "1.0.0",
  "description": "Exercise",
  "main": "index.js",
  "scripts": {
    "start": "tsx --watch ./index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`;

  // Write the content to the markdown file
  fs.writeFile(filePath, addLinksAndH1, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Markdown file created successfully!");
    }
  });

  // Write code file
  fs.writeFile(filePathCode, code, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("TS File created successfully!");
    }
  });

  // Write code file
  fs.writeFile(packageJsonPath, packageJsonValue, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Package json created successfully!");
    }
  });
};

const getExercisesUploadFolder = async (page, browser) => {
  // Navigate to the target page
  await page.goto(URL);

  // isLoggedIn = true;

  // if (isLoggedIn === false) {
  //   await page.click('text="Log in"');
  //   const inputUser = 'input.c-gbnqRc[type="text"]';
  //   const inputPassword = 'input.c-gbnqRc[type="password"]';

  //   await page.waitForSelector(inputUser);
  //   await page.fill(inputUser, process.env.email);
  //   await page.waitForSelector(inputPassword);
  //   await page.fill(inputPassword, process.env.password);
  //   await page.click(
  //     "button.c-cUYkx.c-cUYkx-dshqME-variant-primary.c-cUYkx-fGHEql-isFullWidth-true.c-cUYkx-ABeol-size-large.hr-inline-flex.hr-justify-center.hr-align-center.hr-p-y-1"
  //   );
  //   await page.waitForTimeout(2000);
  // }
  // isLoggedIn = true;
  // Get all anchor elements on the page

  const anchors = await page.$$("a");
  for (const anchor of anchors) {
    const spans = await anchor.$$("span");

    for (const span of spans) {
      const textContent = await span.textContent();

      if (
        textContent.trim() === "Solved" ||
        textContent.trim() === "Solve Challenge"
      ) {
        console.log(
          'Found a "Solved" span within an anchor:',
          await anchor.getAttribute("href")
        );
        const anchorUrl = await anchor.getAttribute("href");
        exercisesURL.push(anchorUrl);
      }
    }
  }

  for (let i = 0; i < exercisesURL.length; i++) {
    console.log("Creating exercises: ", (i / exercisesURL.length) * 100);
    await getPageContent(page, exercisesURL[i]);
  }

  browser.close();
  return;

  // Get the innerHTML of the element
};

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--start-maximized", "--window-position=x,y"],
    proxy: {
      server: "185.14.238.30:1381",
      username: "sadsadas",
      password: "Goomee1ahj0baZ0",
    },
  });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/78.0.3904.108 Chrome/78.0.3904.108 Safari/537.36",
    viewport: null,
    permissions: ["clipboard-read"],
  });
  const page = await context.newPage();
  await getExercisesUploadFolder(page, browser);
})();

// email: codeablebr@gmail.com
// email: 3merZytHU6!Bu82
