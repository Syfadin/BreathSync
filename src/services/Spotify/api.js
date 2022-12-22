import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com';

export const authenticate = async (clientId, clientSecret) => {
  try {
    const response = await axios.post(
      `${SPOTIFY_API_BASE_URL}/api/token`,
      {},
      {
        auth: {
          username: clientId,
          password: clientSecret,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          grant_type: 'client_credentials',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

export const getPlaylists = async (accessToken) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/v1/me/playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export const playSong = async (accessToken, songUri) => {
  try {
    await axios.put(
      `${SPOTIFY_API_BASE_URL}/v1/me/player/play`,
      {
        uris: [songUri],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const pausePlayback = async (accessToken) => {
  try {
    await axios.put(`${SPOTIFY_API_BASE_URL}/v1/me/player/pause`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const resumePlayback = async (accessToken) => {
  try {
    await axios.put(`${SPOTIFY_API_BASE_URL}/v1/me/player/play`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const stopPlayback = async (accessToken) => {
  try {
    await axios.put(`${SPOTIFY_API_BASE_URL}/v1/me/player/pause`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
