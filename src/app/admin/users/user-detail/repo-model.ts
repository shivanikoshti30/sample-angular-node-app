/**
 * @name UserModel
 * @type interface
 * @description model for user object
 */
export interface RepoModel {
    name: string;
    id: number;
    node_id: number;
    full_name: string;
    private: boolean;
    owner: object;
    gravatar_id:string;
    url:string;
    html_url:string;
    fork: boolean;
    description: string;
    keys_url:string;
    forks_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    assignees_url: string;
    events_url :string;
    git_refs_url: boolean
    git_tags_url:string;
    blobs_url:string;
    tags_url: boolean;
    recsvn_urleived_events_url:string;
    ssh_url: string;
    git_url:string;
    pushed_at:string;
    updated_at: string;
    created_at:string;
    deployments_url:string;
    trees_url:string;
  clone_url:string;
  statuses_url: string;
  languages_url:string;
  stargazers_url:string;
  contributors_url: string;
  subscribers_url:string;
  subscription_url:string;
  commits_url:string;
  git_commits_url:string;
  comments_url:string;
  issue_comment_url: string;
  contents_url:string;
  merges_url:string;
  compare_url: string;
  archive_url:string;
  downloads_url:string;
  issues_url:string;
  pulls_url:string;
  milestones_url: string;
  notifications_url:string;
  labels_url:string;
  releases_url: string;
  homepage:string;
  size:number;
  has_issues:boolean;
  has_projects:boolean;
  has_downloads:boolean;
  has_wiki:boolean;
  has_pages: boolean;
  mirror_url:string;
  archived:boolean;
  disabled: boolean;
  language:string;
  targazers_count:number;
  watchers_count:number;
  stargazers_count:number;
  forks_count:number;
  open_issues_count:number;
  forks:number;
  open_issues:number;
  watchers:number;
  license: string;
  default_branch: string;
  };