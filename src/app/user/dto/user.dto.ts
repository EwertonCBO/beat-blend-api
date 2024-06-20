import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";
import { messagesHelper } from "src/helpers/message.helper";
import { regExHelper } from "src/helpers/regex.helper";
export class UserDto {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  
  @IsString()
  nickname: string;

  
  @IsString()
  avatar: string;

  @IsNotEmpty()
  @Matches(regExHelper.password, { message: messagesHelper.PASSWORD_VALID })
  password: string;
}