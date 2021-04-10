import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      sjdfio
    </ChildAsFC>
  );
};

export default Parent;
