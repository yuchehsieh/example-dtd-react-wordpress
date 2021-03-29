import axios from 'axios';
import { SET_ANNOUNCEMENTS, SET_ANNOUNCEMENT_DETAIL } from './actionTypes';

const BASE_URL = 'https://dtd.ntue.edu.tw/wp-json/wp/v2';

export const getAnnouncements = async (dispatch, options) => {
  const { perPage = 5, page = 1 } = options;

  const url = `${BASE_URL}/posts?categories=31&_fields=id, title, category, date&per_page=${perPage}&page=${page}`;
  const response = await axios.get(url);
  const announcements = response.data;

  dispatch({
    type: SET_ANNOUNCEMENTS,
    payload: announcements,
  });
};

export const getAnnouncementDetail = async (dispatch, options) => {
  const { id } = options;
  if (!id) {
    throw new Error('No id.');
  }

  const url = `${BASE_URL}/posts/${id}`;
  const response = await axios.get(url);
  const announcementDetail = response.data;

  dispatch({
    type: SET_ANNOUNCEMENT_DETAIL,
    payload: announcementDetail,
  });
};

// let url = 'https://dtd.ntue.edu.tw/wp-json/dtd/v1/announcements';
