import { ADDBANNER, ADDPERSONALIZED, ADDPLAYLIST, ADDSONGURL, ADDPLAYNUM, UPDATEAUDIOCONTEXT, ADDMUSICTYPE } from '../constants/counter';
import Taro from '@tarojs/taro';
const INITIAL_STATE = {
  banner: [], // banners 数据
  personalized: [], // 推荐歌单 数据
  playList: [], // 点击歌单数据
  songUrl: [], // 歌单数据
  playnum: 0, // 当前播放
  audioContext: process.env.TARO_ENV === 'weapp' ? Taro.getBackgroundAudioManager() : Taro.createInnerAudioContext(), // 背景音乐
  musicType: true // 播放状态（开始，停止）
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDBANNER:
      return {
        ...state,
        banner: action.data
      };
    case ADDPERSONALIZED:
      return {
        ...state,
        personalized: action.data
      };
    case ADDPLAYLIST:
      return {
        ...state,
        playList: action.data
      };
    case ADDSONGURL:
      return {
        ...state,
        songUrl: action.data
      };
    case ADDPLAYNUM:
      return {
        ...state,
        playnum: action.data
      };
    case UPDATEAUDIOCONTEXT:
      let data = state.audioContext;
      Object.assign(data, action.data);
      return state;
    case ADDMUSICTYPE:
      return {
        ...state,
        musicType: action.data
      };
    default:
      return state;
  }
}
