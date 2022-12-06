import UniversalRouter from 'universal-router';

export default new UniversalRouter([
  { path: '/test', action: (req) => ({ page: 'test' }) },
  { path: '/rest', action: (req) => ({ page: 'rest' }) },
  { path: '(.*)', action: () => ({ page: 'test' }) }
])
