type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONValue = JSONPrimitive | JSONObject | IJSONArray;
interface IJSONArray extends Array<JSONValue> {}
