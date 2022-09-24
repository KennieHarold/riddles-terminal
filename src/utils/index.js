const bcrypt = require("bcryptjs");
//const salt = bcrypt.genSaltSync(10);

const parseCommand = async (command) => {
  const isCommand1 = await bcrypt.compare(
    command,
    "$2a$10$TY.EThtWBFlVWChHzmTPi.BRzUGEBL/JCIBhO1Jvf3obIulJOIjAq"
  );

  if (isCommand1) {
    addLine(
      "Tvbaoslzz, lhyslzz, ivkpslzz, iba P jhu baaly huk olhy dpao hpy aoha thrlz tl hspcl."
    );
    return true;
  }

  const isCommand2 = await bcrypt.compare(
    command,
    "$2a$10$Am7nkhFaDiGXFZIBxr9fQ.e0slccw/RZlS8SrFsLwHfeoX3.aWigu"
  );

  if (isCommand2) {
    addLine("Forgot how cipher works code breaker?");
    return true;
  }

  const isCommand3 = await bcrypt.compare(
    command,
    "$2a$10$LT/szZSbR6E5jUFY/eLImOi1resjd/0zoL8Yy4oAeAzFydFBriuGK"
  );

  if (isCommand3) {
    loopLines(["help", "hint", "start", "answer", "refresh"]);
    return true;
  }

  const isCommand4 = await bcrypt.compare(
    command,
    "$2a$10$Ou.EXz3UniahOKRadxa1ju/5xSAmjg2wWLvavaO/KeZsL0/.mSvvK"
  );

  if (isCommand4) {
    addLine("Go to page source!");
    return true;
  }

  const isCommand5 = await bcrypt.compare(
    command,
    "$2a$10$bpzwZJedsZuasDSTGoYioeQ9BsvSiELB.3HDuMz41OY3v7R4mF8ym"
  );

  const isCommand6 = await bcrypt.compare(
    command,
    "$2a$10$2O49wLdcqu6AFA2AEBDvZufmwhgBScRQh.RUhm6fUpAphmWY.scNi"
  );

  if (isCommand5 || isCommand6) {
    addLine("Awesome! You got it code breaker! Loading message....");

    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    loopLines(res?.message || "Cant't connect to the server!");
    return true;
  }

  const isCommand7 = await bcrypt.compare(
    command,
    "$2a$10$8oeL4wC/ttkj54H8ktro7OLMsr82eB9m.lnyVFTt/5YZVME/NPIvS"
  );

  if (isCommand7) {
    window.location.reload();
    return true;
  }

  addLine("Command not found! Try using help");
  return false;
};

export const type = (e) => {
  const lastChar = e.target.value[e.target.value.length - 1];

  if (lastChar === "\n") {
    return;
  }

  const typer = document.getElementById("typer");
  typer.innerHTML = e.target.value;
};

export const detectCommand = (e) => {
  const typer = document.getElementById("typer");

  if (e.which === 13) {
    if (document.getElementById("welcome-banner")) {
      document.getElementById("welcome-banner").remove();
    }

    const command = typer.innerHTML;
    parseCommand(command);

    typer.innerHTML = "";
    e.target.value = "";
  }
};

export const addLine = (text, time) => {
  const before = document.getElementById("before");
  const next = document.createElement("p");
  next.innerHTML = text;
  before.parentNode.insertBefore(next, before);
  window.scrollTo(0, document.body.offsetHeight);
};

export const loopLines = (name) => {
  name.forEach(function (item) {
    addLine(item);
  });
};
