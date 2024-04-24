#!/usr/bin/env node

import { createSpinner } from 'nanospinner';
import figlet from 'figlet';
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function main() {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    console.log();

    console.log(chalk.green(
        `${figlet.textSync("Hello World!", {
            font: "ANSI Shadow",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 100,
            whitespaceBreak: true,
        })}`
    ));

    const spinner = createSpinner('Loading Pranav\'s details').start();

    async function startSpinner() {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    await startSpinner();

    spinner.success();

    console.log();

    const asciiPersonalDetailsHeading = `
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`;

    const username = '@PranavArya37'
    const linkedInLink = chalk.bgRed(username) + ' ⟶ ' + ' https://www.linkedin.com/in/pranavarya37';
    const githubLink = chalk.bgRed(username) + ' ⟶ ' + ' https://www.github.com/PranavArya37';
    const twitterLink = chalk.bgRed(username) + ' ⟶ ' + ' https://www.twitter.com/PranavArya37';
    const websiteLink = 'https://pranavarya.in';

    const finalText =
        `${chalk.yellow(asciiPersonalDetailsHeading)}\n\n${chalk.green(`NAME`)}      -  ${chalk.bold.cyan(`Pranav Arya`)}\n\n${chalk.green(`LINKEDIN`)}  -  ${chalk.cyan(`${linkedInLink}`)}\n\n${chalk.green(`TWITTER`)}   -  ${chalk.cyan(`${twitterLink}`)}\n\n${chalk.green(`GITHUB`)}    -  ${chalk.cyan(`${githubLink}`)}\n\n${chalk.green(`WEBSITE`)}   -  ${chalk.cyan(`${websiteLink}`)}`;

    console.log(boxen(finalText, {
        padding: 0.5,
        borderStyle: 'double',
        borderColor: 'green'
    }));

    console.log();

    function printColorfulArt() {
        const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta', 'green', 'cyan', 'white', 'gray', 'brightRed', 'brightGreen', 'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite']);

        const asciiName = `
########::'########:::::'###::::'##::: ##::::'###::::'##::::'##:::::::'###::::'########::'##:::'##::::'###::::
##.... ##: ##.... ##:::'## ##::: ###:: ##:::'## ##::: ##:::: ##::::::'## ##::: ##.... ##:. ##:'##::::'## ##:::
##:::: ##: ##:::: ##::'##:. ##:: ####: ##::'##:. ##:: ##:::: ##:::::'##:. ##:: ##:::: ##::. ####::::'##:. ##::
########:: ########::'##:::. ##: ## ## ##:'##:::. ##: ##:::: ##::::'##:::. ##: ########::::. ##::::'##:::. ##:
##.....::: ##.. ##::: #########: ##. ####: #########:. ##:: ##::::: #########: ##.. ##:::::: ##:::: #########:
##:::::::: ##::. ##:: ##.... ##: ##:. ###: ##.... ##::. ## ##:::::: ##.... ##: ##::. ##::::: ##:::: ##.... ##:
##:::::::: ##:::. ##: ##:::: ##: ##::. ##: ##:::: ##:::. ###::::::: ##:::: ##: ##:::. ##:::: ##:::: ##:::: ##:
..:::::::::..:::::..::..:::::..::..::::..::..:::::..:::::...::::::::..:::::..::..:::::..:::::..:::::..:::::..::`.split('\n');

        const ascii_ManWithComputer__Image = fs.readFileSync(path.join(__dirname, 'manWithNPE.txt'), 'utf-8').split('\n');

        function printColoredLines(asciiName, getColorCodeFunc) {
            for (let i = 0; i < asciiName.length; i++) {
                let coloredLine = '';
                for (let j = 0; j < asciiName[i].length; j++) {
                    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
                    coloredLine += `\x1b[${getColorCodeFunc(randomColor)}m${asciiName[i][j]}\x1b[0m`;
                }
                console.log(coloredLine);
            }
        }

        function getColorCode(color) {
            const colorCodes = {
                'yellow': '33',
                'red': '31',
                'blue': '34',
                'magenta': '35',
                'green': '32',
                'cyan': '36',
                'white': '37',
                'gray': '90',
                'brightRed': '91',
                'brightGreen': '92',
                'brightYellow': '93',
                'brightBlue': '94',
                'brightMagenta': '95',
                'brightCyan': '96',
                'brightWhite': '97'
            };
            return colorCodes[color];
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        printColoredLines(ascii_ManWithComputer__Image, getColorCode);
        printColoredLines(asciiName, getColorCode);
    }

    printColorfulArt();

}

main();