import React, { useState } from 'react';
import { User, Heart, MessageCircle, Plus } from 'lucide-react';
import { mockForumPosts } from '../data';
import './Community.css';

const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const forumCategories = [
    { id: 'all', label: 'All Posts', count: 156 },
    { id: 'academic', label: 'Academic Stress', count: 45 },
    { id: 'anxiety', label: 'Anxiety & Panic', count: 32 },
    { id: 'depression', label: 'Depression', count: 28 },
    { id: 'relationships', label: 'Relationships', count: 23 },
    { id: 'adjustment', label: 'Adjustment Issues', count: 28 },
  ];

  const handleSubmitPost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      alert('Post submitted successfully! It will be reviewed by moderators before being published.');
      setShowNewPost(false);
      setNewPostTitle('');
      setNewPostContent('');
      setIsAnonymous(true);
    }
  };

  return (
    <div className="community-container">
      <div className="header text-center">
        <h2>Peer Support Community</h2>
        <p>Connect with fellow students in a safe, moderated environment</p>
      </div>

      <div className="community-grid">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="new-post-btn">
            <button onClick={() => setShowNewPost(true)}>
              <Plus className="icon" />
              <span>New Post</span>
            </button>
          </div>

          <div className="categories">
            <h3>Categories</h3>
            {forumCategories.map((category) => (
              <button
                key={category.id}
                className={selectedCategory === category.id ? 'selected' : ''}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.label}</span>
                <span>{category.count}</span>
              </button>
            ))}
          </div>

          <div className="guidelines">
            <h3>Community Guidelines</h3>
            <ul>
              <li>• Be respectful and supportive</li>
              <li>• No personal attacks or discrimination</li>
              <li>• Protect anonymity and privacy</li>
              <li>• Report inappropriate content</li>
              <li>• Seek professional help when needed</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {showNewPost && (
            <div className="new-post-form">
              <h3>Create New Post</h3>
              <input
                type="text"
                placeholder="Post title..."
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <textarea
                rows={4}
                placeholder="Share thoughts, ask for advice, or offer support..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <div className="form-footer">
                <label>
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                  />
                  Post anonymously
                </label>
                <div className="buttons">
                  <button onClick={() => setShowNewPost(false)}>Cancel</button>
                  <button onClick={handleSubmitPost}>Post</button>
                </div>
              </div>
            </div>
          )}

          {/* Forum Posts */}
          <div className="posts-list">
            {mockForumPosts
              .filter((p) => selectedCategory === 'all' || p.category.toLowerCase().includes(selectedCategory))
              .map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="author">
                      <div className="avatar">
                        <User className="icon" />
                      </div>
                      <div>
                        <h4>{post.author}</h4>
                        <p>
                          {new Date(post.timestamp).toLocaleDateString()} in {post.category}
                        </p>
                      </div>
                    </div>
                    {post.isAnonymous && <span className="anonymous">Anonymous</span>}
                  </div>
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-content">{post.content}</p>

                  <div className="post-actions">
                    <button>
                      <Heart className="icon" /> {post.likes} likes
                    </button>
                    <button>
                      <MessageCircle className="icon" /> {post.replies} replies
                    </button>
                    <button>Share support</button>
                  </div>
                </div>
              ))}
          </div>

          <div className="load-more">
            <button>Load More Posts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
