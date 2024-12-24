import { JSONFilePreset } from "lowdb/node";

const defaultData = { result: [], total: 0 };
const db = await JSONFilePreset("db.json", defaultData);

export default db;
