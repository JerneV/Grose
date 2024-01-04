// @ts-nocheck
import { writable } from "svelte/store";
import { localStore } from "./localStore";

const initialTodos = [];

export let allTodos = localStore("grose-data", initialTodos);