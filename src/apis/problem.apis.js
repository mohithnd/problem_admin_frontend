import axios from "../config/axios.config";

export async function createProblem(problemTitle, problemDescription) {
  try {
    const response = await axios.post("/api/v1/problems", {
      title: problemTitle,
      description: problemDescription,
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
