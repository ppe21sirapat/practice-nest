import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    let messageArray: string[] = [] ;

    if(!createMemberDto.firstname || !createMemberDto.lastname)
    {
      if(!createMemberDto.firstname)
      {
        messageArray.push('firstname is require') ;
      }
      if(!createMemberDto.lastname)
      { 
        messageArray.push('lastname is require') ;
      }

      // throw new HttpException({
      //   status: HttpStatus.BAD_REQUEST,
      //   message: messageArray
      // }, HttpStatus.BAD_REQUEST)
      throw new BadRequestException
      ({
            message: messageArray
      })
    }
    else
    {
      return this.memberService.create(createMemberDto) ;
    }
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    let messageArray: string[] = [] ;
    
    if(!updateMemberDto.firstname || !updateMemberDto.lastname)
    {
      if(!updateMemberDto.firstname)
      {
        messageArray.push('firstname is require') ;
      }
      if(!updateMemberDto.lastname)
      {
        messageArray.push('lastname is require') ;
      }

      // throw new HttpException({
      //   status: HttpStatus.BAD_REQUEST,
      //   message: messageArray
      // }, HttpStatus.BAD_REQUEST)

      throw new BadRequestException
      ({
            message: messageArray
      })
    }
    else
    {
      return this.memberService.update(+id, updateMemberDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
