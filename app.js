const listBawaan = document.querySelectorAll(".list-bawaan");
const totalBawaan = document.getElementById("total-bawaan");
totalBawaan.textContent = listBawaan.length;

const listCaseHp = document.querySelectorAll(".casehp");
const totalCaseHp = document.getElementById("total-casehp");
totalCaseHp.textContent = listCaseHp.length;

const listGakLupa = document.querySelectorAll(".list-gak-lupa");
const totalGakLupa = document.getElementById("total-gak-lupa");
totalGakLupa.textContent = listGakLupa.length;

const anggotaPria = document.querySelector(".pria");
const totalAnggotaPria = document.getElementById("total-pria");
totalAnggotaPria.textContent = anggotaPria.children.length;

const anggotaWanita = document.querySelector(".wanita");
const totalAnggotaWanita = document.getElementById("total-wanita");
totalAnggotaWanita.textContent = anggotaWanita.children.length;

const totalSemuaAnggota = document.getElementById("total-all");
totalSemuaAnggota.textContent = anggotaPria.children.length + anggotaWanita.children.length;

const totalHp = document.getElementById("total-all-hp");
totalHp.textContent = anggotaPria.children.length + anggotaWanita.children.length - 1 + ' ("Kemungkinan" semua yang terdaftar punya hp kecuali apip)';
