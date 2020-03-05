import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  templates: Template[] = [];
  selectedTemplate: Template;
  selectedFile: File;
  data = [];
  header = [];
  enableUpload: boolean;
  displayedColumns: string[] = this.header;
  dataSource = new MatTableDataSource<any>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showSpinner: boolean = false;
  response: { status: Boolean, file: { fileId: string, fileName: string } };



  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.templates.push({ name: 'template1', title: 'Template 1' });
    this.templates.push({ name: 'template2', title: 'Template 2' });
    this.templates.push({ name: 'template2', title: 'Template 3' });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.enableUpload = false;
    this.response = {
      status: false,
      file: {
        fileId: '',
        fileName: ''
      }
    }


  }

  fileChanged(file: any, event) {
    if (file.length) {
      this.selectedFile = file[0]
      this.onFileChange(event)
    }
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // console.log(ws);
      /* save data */
      const data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.formatExcelData(data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  formatExcelData(data: any[]) {
    this.header = data[0];
    if (this.header.length > 5) {
      this.header = this.header.slice(0, 5);
    }
    data.splice(0, 1);
    data.forEach(el => {
      let obj = {};
      this.header.forEach((head, index) => {
        obj[head] = el[index];
      });
      this.data.push(obj);
    });

    this.displayedColumns = this.header;
    this.dataSource = new MatTableDataSource<any>(this.data);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  uploadFile() {
    this.showSpinner = true;
    this.response = {
      status: false,
      file: {
        fileId: '',
        fileName: ''
      }
    }
    setTimeout(() => {
      this.showSpinner = false;
      this.response = {
        status: true,
        file: {
          fileId: '',
          fileName: this.selectedFile.name
        }
      }
      Swal.fire(
        'Done',
        'Your file uploaded successfully!',
        'success'
      )
    }, 3000);
  }

  validateFile() {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      data: { type: 'validate-file', fileId: this.response.file.fileId, fileName: this.response.file.fileName }
    });
  }

}
interface Template {
  name: string;
  title: string;
}