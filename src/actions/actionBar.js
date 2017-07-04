/**
 * Created by U on 2017-06-23.
 */
// 定义bar actions
export const starActionBar = () =>　{
  return  {
    type: 'starActionBar'
  }
};

export const starActionBarFault = () =>　{
  return { type: 'starActionBarFault', error: 'Oops' }

};

export const starActionBarSuccess = (json) =>　{
  return   { type: 'starActionBarSuccess', response:  json  }

};

// 定义map actions
export const starActionMap = () =>　{
  return  {
    type: 'starActionMap'
  }
};

export const starActionMapFault = () =>　{
  return { type: 'starActionMapFault', error: 'Oops' }

};

export const starActionMapSuccess = (json) =>　{
  return   { type: 'starActionMapSuccess', response:  json  }

};

// 定义table actions
export const starActionTable = () =>　{
  return  {
    type: 'starActionTable'
  }
};

export const starActionTableFault = () =>　{
  return { type: 'starActionTableFault', error: 'Oops' }

};

export const starActionTableSuccess = (json) =>　{
  return   { type: 'starActionTableSuccess', response:  json  }

};

export const deleteRow = (index) => {
  return {
    type: 'deleteRow',
    deleteIndex: index
  }
};

export const modifyTableInfo = (formData) => {
  return {
    type: 'modifyInfo',
    formData
  }
};

//定义weather actions
export const starActionWeather = () =>　{
  return  {
    type: 'starActionWeather'
  }
};

export const starActionWeatherFault = () =>　{
  return { type: 'starActionWeatherFault', error: 'Oops' }

};

export const starActionWeatherSuccess = (json) =>　{
  return   { type: 'starActionWeatherSuccess', response:  json  }

};
