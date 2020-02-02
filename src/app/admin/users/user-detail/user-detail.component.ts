import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from 'src/app/shared/services/git.service';
import {MatTableDataSource} from '@angular/material/table';

import { RepoModel } from './repo-model'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public repoList: RepoModel[] = [];
  public displayedColumns: string[] = ['id','full_name', 'git_url']
  public dataSource;
  public username: string;

  constructor(private route: ActivatedRoute, private gitService: GitService) { }

  ngOnInit() {
    //get param data from route
    this.route.paramMap.subscribe(params => {
      this.username = params.get('id');
      this.getUserRepos(params.get('id'))
    });
  }

  /**
     * @name getUserRepos
     * @description subscribes getUsers function of gitService to fetch all users
     * @param null
     */
    getUserRepos(username){
      this.gitService.getUserRepos(username).subscribe((res: any) => 
      {
          this.repoList = res;
          this.dataSource = new MatTableDataSource(this.repoList)
      
      }, err => {
          console.log(err);
      });
  }

  
    /**
     * @name applyFilter
     * @description search typed in value in the table
     * @param filterValue 
     */
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
