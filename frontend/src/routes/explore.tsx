import { Layout } from 'antd';
import Post from '../components/post';
import Comment from '../components/comment';

export default function Explore() {
    return (
       <>
         <Layout.Content style={{
           backgroundColor: "white",
           overflowY: 'auto',
           scrollbarWidth: 'thin',
           width: '200px',
           borderRight: '1px solid',
         }}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
         </Layout.Content>

         <Layout.Content style={{
           backgroundColor : 'white',
           overflowY: 'auto',
           scrollbarWidth: 'thin',
         }}>
           <Comment />
           <Comment />
           <Comment />
           <Comment />
           <Comment />
           <Comment />
           <Comment />
           <Comment />
         </Layout.Content>
       </>
      );
}