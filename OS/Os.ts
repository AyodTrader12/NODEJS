import Os from "node:os";

//os arch

const a = Os.arch();
console.log("my computer architecture is ....", a);

// version
const b = Os.version();
console.log("my system version is ....", b);

// cpus
const c = Os.cpus();
console.log("my pc model is.. ", b);

// freeman

const d = Os.freemem();
console.log("my pc free memory is.. ", d / 1024 / 1024);

// Homedir

const e = Os.homedir();
console.log("my home directory is.. ", e);

// release
const f = Os.release();
console.log("my release directory is.. ", f);

// platform
const g = Os.platform();
console.log("my platform is........", g);

// hostname

const h = Os.hostname();
console.log("my hostname is........", h);

// network

const i = Os.networkInterfaces();
console.log("my network interfaces are........", i);

// machine
const j = Os.machine();
console.log("my machine is........", j);

// uptime
const k = Os.uptime();
console.log("my uptime is........", k);

// type
const l = Os.type();
console.log("my pctype is........", l);

// check my space size

const checkMySPace = () => {
  let mem: number = Os.freemem() / (1024 * 1024 * 1024);

  console.log(`${parseFloat(mem.toFixed(2))}GB available`);

  console.log(`${parseFloat(mem.toFixed(2))}GB space remaining`);
};
checkMySPace();
