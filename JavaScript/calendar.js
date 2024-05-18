const { program } = require("commander");

program.option("-m, --multiplier <number>", "A multiplier value", parseFloat);

program.parse(process.argv);

const options = program.opts();

if (options.multiplier < 1 || options.multiplier > 12 ) {
  throw new Error("引数が不正です。1〜12の数字以外は使用できません");
}

const date = new Date();
date.setDate(1);
date.setHours(0, 0, 0, 0);

const year = date.getFullYear();

if (options.multiplier !== undefined) {
  date.setMonth(options.multiplier - 1);
}

const month = date.getMonth() + 1;

const endMonth = new Date(year, month, 0);

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

const saturDay = 6;

for (
  let eachDay = new Date(date);
  eachDay <= endMonth;
  eachDay.setDate(eachDay.getDate() + 1)
) {
  if (eachDay.getDate() === date.getDate()) {
    process.stdout.write("   ".repeat(date.getDay()));
  }

  if (eachDay.getDay() === saturDay) {
    console.log(eachDay.getDate().toString().padStart(2, " "));
  } else {
    process.stdout.write(eachDay.getDate().toString().padStart(2, " "));
    process.stdout.write(" ");
  }
}

console.log();
