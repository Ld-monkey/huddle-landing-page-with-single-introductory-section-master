import IcoMoon from 'react-icomoon';
import iconSet from '../../assets/icons/selection.json';

function Icons({ ...props }) {
  return <IcoMoon iconSet={iconSet} {...props} />;
}

export default Icons;
