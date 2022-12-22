import axios from 'axios';

const API_BASE_URL = 'https://api.tummoapp.com';

export const startSession = async (roundDuration, numRounds, songs) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sessions`, {
      roundDuration,
      numRounds,
      songs,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSession = async (sessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sessions/${sessionId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSession = async (sessionId, data) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/sessions/${sessionId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSession = async (sessionId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/sessions/${sessionId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
