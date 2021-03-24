import axios from 'axios';

const getAnnouncements = async (perPage = 5, page = 1) => {
  let url = `https://dtd.ntue.edu.tw/wp-json/wp/v2/posts?categories=31&_fields=id, title, category, date&per_page=${perPage}&page=${page}`;
  // let url = 'https://dtd.ntue.edu.tw/wp-json/dtd/v1/announcements';
  let response = await axios.get(url);
  return response.data;
};

const getAnnouncementById = async (id) => {
  if (!id) {
    throw new Error('No id.');
  }
  let url = `https://dtd.ntue.edu.tw/wp-json/wp/v2/posts/${id}`;
  let response = await axios.get(url);
  return response.data;
};

export { getAnnouncements, getAnnouncementById };
