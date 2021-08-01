import React from 'react';

import { IconTypeEnum } from '../../types/enums/IconType';
import { IIconProps } from '../../types/interfaces/atoms';
import EmailIcon from '../../assets/icons/email.svg';
import MemojiIcon from '../../assets/icons/memoji.svg';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import MinusIcon from '../../assets/icons/minus.svg';
import ReactIcon from '../../assets/icons/react.svg';
import FirebaseIcon from '../../assets/icons/firebase.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg';
import MongoDbIcon from '../../assets/icons/mongodb.svg';
import PythonIcon from '../../assets/icons/python.svg';
import RubyIcon from '../../assets/icons/ruby.svg';
import RailsIcon from '../../assets/icons/rails.svg';
import TypescriptIcon from '../../assets/icons/typescript.svg';
import HtmlIcon from '../../assets/icons/html.svg';
import CssIcon from '../../assets/icons/css.svg';
import PostgresqlIcon from '../../assets/icons/postgresql.svg';
import OcamlIcon from '../../assets/icons/ocaml.svg';
import LinkIcon from '../../assets/icons/link.svg';
import CppIcon from '../../assets/icons/cpp.svg';
import JavaIcon from '../../assets/icons/java.svg';
import PrinterIcon from '../../assets/icons/printer.svg';

export default function Icon(props: IIconProps): JSX.Element {
  const { iconType, ...htmlProps } = props;

  switch (iconType) {
    case IconTypeEnum.Email:
      return <img {...htmlProps} src={EmailIcon} alt="EmailIcon" />;
    case IconTypeEnum.Memoji:
      return <img {...htmlProps} src={MemojiIcon} alt="MemojiIcon" />;
    case IconTypeEnum.Github:
      return <img {...htmlProps} src={GithubIcon} alt="GithubIcon" />;
    case IconTypeEnum.LinkedIn:
      return <img {...htmlProps} src={LinkedInIcon} alt="LinkedInIcon" />;
    case IconTypeEnum.Plus:
      return <img {...htmlProps} src={PlusIcon} alt="PlusIcon" />;
    case IconTypeEnum.Minus:
      return <img {...htmlProps} src={MinusIcon} alt="MinusIcon" />;
    case IconTypeEnum.React:
      return <img {...htmlProps} src={ReactIcon} alt="ReactIcon" />;
    case IconTypeEnum.Firebase:
      return <img {...htmlProps} src={FirebaseIcon} alt="FirebaseIcon" />;
    case IconTypeEnum.Javascript:
      return <img {...htmlProps} src={JavascriptIcon} alt="JavascriptIcon" />;
    case IconTypeEnum.MongoDb:
      return <img {...htmlProps} src={MongoDbIcon} alt="MongoDbIcon" />;
    case IconTypeEnum.Python:
      return <img {...htmlProps} src={PythonIcon} alt="PythonIcon" />;
    case IconTypeEnum.Ruby:
      return <img {...htmlProps} src={RubyIcon} alt="RubyIcon" />;
    case IconTypeEnum.Rails:
      return <img {...htmlProps} src={RailsIcon} alt="RailsIcon" />;
    case IconTypeEnum.Typescript:
      return <img {...htmlProps} src={TypescriptIcon} alt="TypescriptIcon" />;
    case IconTypeEnum.Html:
      return <img {...htmlProps} src={HtmlIcon} alt="HtmlIcon" />;
    case IconTypeEnum.Css:
      return <img {...htmlProps} src={CssIcon} alt="CssIcon" />;
    case IconTypeEnum.Postgresql:
      return <img {...htmlProps} src={PostgresqlIcon} alt="PostgresqlIcon" />;
    case IconTypeEnum.Ocaml:
      return <img {...htmlProps} src={OcamlIcon} alt="OcamlIcon" />;
    case IconTypeEnum.Link:
      return <img {...htmlProps} src={LinkIcon} alt="LinkIcon" />;
    case IconTypeEnum.Cpp:
      return <img {...htmlProps} src={CppIcon} alt="CppIcon" />;
    case IconTypeEnum.Java:
      return <img {...htmlProps} src={JavaIcon} alt="JavaIcon" />;
    case IconTypeEnum.Printer:
      return <img {...htmlProps} src={PrinterIcon} alt="PrinterIcon" />;
  }
}
