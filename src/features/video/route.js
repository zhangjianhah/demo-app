// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { DefaultPage, Test1, VideoList, Info } from './';

export default {
  path: 'video',
  childRoutes: [
    { path: '/video/default', component: DefaultPage },
    { path: 'test1', component: Test1 },
    { path: 'list', component: VideoList },
    { path: '/video/:id', component: Info },
  ],
};


// import { WelcomePage, CounterPage, RedditListPage, Layout } from './';

// export default {
//   path: 'examples',
//   component: Layout,
//   childRoutes: [
//     { path: '', component: WelcomePage, isIndex: true },
//     { path: 'counter', component: CounterPage },
//     { path: 'reddit', component: RedditListPage },
//   ],
// };

