export const topTop = containerRect => rect => 
  ~~(rect.top - containerRect.top);
  
export const topBottom = (containerRect, container) => rect => 
  ~~(rect.top - containerRect.top - container.clientHeight);
  
export const topCenter = (containerRect, container) => rect => 
  ~~(rect.top - containerRect.top - container.clientHeight / 2);

export const centerTop = containerRect => rect =>
  ~~(rect.top + rect.height / 2 - containerRect.top);
    
export const centerCenter = (containerRect, container) => rect => 
  ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2);

export const centerBottom = (containerRect, container) => rect =>
  ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight);
    
export const bottomBottom = (containerRect, container) => rect =>
  ~~(rect.bottom - containerRect.top - container.clientHeight);
  
export const bottomTop = containerRect => rect =>
  ~~(rect.bottom - containerRect.top);

export const bottomCenter = (containerRect, container) => rect =>
  ~~(rect.bottom - containerRect.top - container.clientHeight / 2);

export const getDocumentRect = documentRect => documentRect;
export const getDocumentElement = (_,documentElement) => documentElement;
export const calculateScrollY = ({top}) => -top;