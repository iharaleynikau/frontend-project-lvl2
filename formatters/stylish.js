import _ from 'lodash';

const json = (diff) => {
  const result = [];

  for (const obj of diff) {
    switch (obj.status) {
      case 'have a child':
        
        break;
      case 'changed':
        result.push(`  - ${obj.key}: ${obj.value.oldValue}\n  + ${obj.key}: ${obj.value.newValue}`);
      
        break;
      
      case 'removed':
        result.push(`  - ${obj.key}: ${obj.value}`);
      
        break;
  
      case 'new':
        result.push(`  + ${obj.key}: ${obj.value}`);
      
        break;
  
      case 'same':
        result.push(`    ${obj.key}: ${obj.value}`);
      
        break;
    
      default:
        break;
    }
  }

  return result;
};

export default json;