import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop'

import {MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatExpansionModule, MatListModule,  MatIconModule} from '@angular/material';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { SpeechComponent } from './speech/speech.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { AudioRecordingService } from './speeches/rec.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoInputComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoFooterComponent,
    SpeechComponent,
    SpeechesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [AudioRecordingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
