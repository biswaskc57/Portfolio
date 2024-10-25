import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    [key: string]: string | number; // Optional for any additional properties you may not need
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
export default function Github() {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([] as Repo []);

  useEffect(() => {
    fetchData();
    fetchRepos();
  }, []);

  const fetchData = async () => {
    try {
      const { data: userData } = await axios.get('https://api.github.com/users/biswaskc57');
      setData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchRepos = async () => {
    try {
      const { data: repoData } = await axios.get('https://api.github.com/users/biswaskc57/repos');
      setRepos(repoData);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <li key={repo.id}>
              {repo.name}
              {' '}
              -
              {repo.language || 'No language specified'}
            </li>
          ))
        ) : (
          <p>Loading repositories...</p>
        )}
      </ul>
    </div>
  );
}
