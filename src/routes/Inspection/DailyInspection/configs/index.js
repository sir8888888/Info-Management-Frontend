// 巡检人
export const SELECT_HOME_WORK_NUM_ONE = '0';
export const SELECT_HOME_WORK_NUM_TWO = '1';
export const SELECT_HOME_WORK_NUM_THREE = '2';

export const SELECT_HOME_WORK_NUM_MAP = {
  [SELECT_HOME_WORK_NUM_ONE]: '张三',
  [SELECT_HOME_WORK_NUM_TWO]: '李四',
  [SELECT_HOME_WORK_NUM_THREE]: '王二',
};

export const SELECT_HOME_WORK_NUM = Object.keys(SELECT_HOME_WORK_NUM_MAP).map(cur => ({
  id: cur,
  name: SELECT_HOME_WORK_NUM_MAP[cur],
}));

// 巡检总况
export const SELECT_INSPECTION_STATUS_NORMAL = '0';
export const SELECT_INSPECTION_STATUS_ABNORMAL = '1';

export const SELECT_INSPECTION_STATUS_MAP = {
  [SELECT_INSPECTION_STATUS_NORMAL]: '正常',
  [SELECT_INSPECTION_STATUS_ABNORMAL]: '异常',
};

export const SELECT_INSPECTION_STATUS = Object.keys(SELECT_INSPECTION_STATUS_MAP).map(cur => ({
  id: cur,
  name: SELECT_INSPECTION_STATUS_MAP[cur],
}));

// 可选择的异常项

export const SELECT_INSPECTION_ABNORMA_ITEM_ZERO = '001';
export const SELECT_INSPECTION_ABNORMA_ITEM_ONE = '002';
export const SELECT_INSPECTION_ABNORMA_ITEM_TWO = '003';
export const SELECT_INSPECTION_ABNORMA_ITEM_THREE = '004';
export const SELECT_INSPECTION_ABNORMA_ITEM_FORE = '005';
export const SELECT_INSPECTION_ABNORMA_ITEM_FIVE = '006';

export const SELECT_INSPECTION_ABNORMA_ITEM_MAP = {
  [SELECT_INSPECTION_ABNORMA_ITEM_ZERO]: '地下综合管廊-1号防火区',
  [SELECT_INSPECTION_ABNORMA_ITEM_ONE]: '电力电缆仓-接地箱',
  [SELECT_INSPECTION_ABNORMA_ITEM_TWO]: '电力电缆仓-气体探头',
  [SELECT_INSPECTION_ABNORMA_ITEM_THREE]: '电力电缆-湿度探头',
  [SELECT_INSPECTION_ABNORMA_ITEM_FORE]: '德胜路地下综合管廊-1号防火区',
  [SELECT_INSPECTION_ABNORMA_ITEM_FIVE]: '燃仓-气体探头',
};
export const SELECT_INSPECTION_ABNORMA_ITEM = Object.keys(SELECT_INSPECTION_ABNORMA_ITEM_MAP).map(cur => ({
  id: cur,
  name: SELECT_INSPECTION_ABNORMA_ITEM_MAP[cur],
  state: Math.floor(Math.random() + 0.5),
}));

// 维保公司
export const SELECT_MAINTENANCE_COMPANY_MAP_ONE = '0';
export const SELECT_MAINTENANCE_COMPANY_MAP_TWO = '1';
export const SELECT_MAINTENANCE_COMPANY_MAP_THREE = '3';
export const SELECT_MAINTENANCE_COMPANY_MAP_FOUR = '4';

export const SELECT_MAINTENANCE_COMPANY_MAP = {
  [SELECT_MAINTENANCE_COMPANY_MAP_ONE]: '智慧管廊维保公司',
  [SELECT_MAINTENANCE_COMPANY_MAP_TWO]: '系统维系维护有限公司',
  [SELECT_MAINTENANCE_COMPANY_MAP_THREE]: '银川市地下综合管廊运营维护管理有限公司',
  [SELECT_MAINTENANCE_COMPANY_MAP_FOUR]: '山东东融综合管廊维护运营有限公司',
};

export const SELECT_MAINTENANCE_COMPANY = Object.keys(SELECT_MAINTENANCE_COMPANY_MAP).map(cur => ({
  id: cur,
  name: SELECT_MAINTENANCE_COMPANY_MAP[cur],
}));

// 值班人
export const SELECT_INSPECTION_DUTY_PEOPLE_ONE = '1';
export const SELECT_INSPECTION_DUTY_PEOPLE_TWO = '2';
export const SELECT_INSPECTION_DUTY_PEOPLE_THREE = '3';
export const SELECT_INSPECTION_DUTY_PEOPLE_FOUR = '4';
export const SELECT_INSPECTION_DUTY_PEOPLE_FIVE = '5';
export const SELECT_INSPECTION_DUTY_PEOPLE_DIX = '6';
export const SELECT_INSPECTION_DUTY_PEOPLE_SEVEN = '7';

export const INSPECTION_DUTY_PEOPLE_MAP = {
  [SELECT_INSPECTION_DUTY_PEOPLE_ONE]: '埃里克',
  [SELECT_INSPECTION_DUTY_PEOPLE_TWO]: '弗兰克力',
  [SELECT_INSPECTION_DUTY_PEOPLE_THREE]: '里欧',
  [SELECT_INSPECTION_DUTY_PEOPLE_FOUR]: '洛克',
  [SELECT_INSPECTION_DUTY_PEOPLE_FIVE]: '罗伊',
  [SELECT_INSPECTION_DUTY_PEOPLE_DIX]: '艾伦',
  [SELECT_INSPECTION_DUTY_PEOPLE_SEVEN]: '亚瑟',
};
export const INSPECTION_DUTY_PEOPLE = Object.keys(INSPECTION_DUTY_PEOPLE_MAP).map(cur => ({
  id: cur,
  name: INSPECTION_DUTY_PEOPLE_MAP[cur],
  state: Math.floor(Math.random() + 0.5),
}));