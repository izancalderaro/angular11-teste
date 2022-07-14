import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { UserSouGov } from 'src/app/models/user-sougov-model';
import { AppConfigService } from 'src/app/service/app-config.service';
import { SougovService } from 'src/app/service/sougov.service';

@Component({
  selector: 'app-sougov',
  templateUrl: './sougov.component.html',
  styleUrls: ['./sougov.component.scss'],
})
export class SougovComponent implements OnInit {
  /**
   *
   */
  aparencia: MatFormFieldAppearance = 'legacy';
  user_info: UserSouGov = new UserSouGov();
  formAuth: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder, private _sougov: SougovService) {}

  ngOnInit(): void {
    this.formAuth = this._fb.group({
      response_type: [''],
      client_id: [''],
      scope: [''],
      redirect_uri: [''],
      nonce: [''],
      state: [''],
      code_challenge: [''],
      code_challenge_method: [''],
    });
  }

  onSubmit() {
    /** */

    this.user_info = this.formAuth.value;

    this._sougov.login(this.user_info).subscribe((data) => console.log(data));

    console.log(JSON.stringify(this.user_info));
  }
}
