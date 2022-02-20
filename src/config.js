import { Appwrite } from "appwrite";

const inst= new Appwrite();
inst
.setEndpoint('http://localhost/v1')
.setProject('62114d3af25a9');

export const sdk = inst;