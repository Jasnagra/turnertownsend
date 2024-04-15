import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Playlist } from '../interface/playlist.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss'
})
export class PlaylistListComponent {

  dataSource!: MatTableDataSource<Playlist>;
  displayedColumns: string[] = ['image', 'name', 'created_by'];

  @Input() listOfPlaylists: ReadonlyArray<Playlist> = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listOfPlaylists'] && changes['listOfPlaylists'].currentValue?.length) {
      this.dataSource = new MatTableDataSource([...this.listOfPlaylists]);
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(evt: any) {
    let filterValue = "";
    if(evt.target && evt.target.value) {
      filterValue = evt.target.value;
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;  
    }
  }
}