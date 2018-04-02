import moment from "moment";

const friendlyFormat = (date) => {
  return moment(date).calendar();
}

export default {
  friendlyFormat
}