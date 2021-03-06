/* eslint @typescript-eslint/camelcase: "off" */
export const fi2PartnersJson = {
  fi2simplemessage: {
    'xmlns:meta': 'http://www.metadata.se/meta/1.10/meta-1.10',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2messageheader: {
      fi2sender: {
        fi2reference: [
          {
            fi2value_code: {},
            fi2value_value: {},
          },
          {
            fi2value_code: 'B',
            fi2value_scheme: {
              fi2scheme_id: 'VA000_004_002',
              fi2scheme_name: 'Avsändarvärden fi2sender',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VA000_004_002.xml',
            },
            fi2value_value: 'fastAPI',
          },
        ],
        fi2systemidentity: {},
      },
      fi2version: '1.31',
      fi2messageversion: '1.3.3',
      fi2messageid: 'f4ac0bde-e666-49e5-9ecc-b5cb6ffebcdc',
      fi2messagedate: '2020-04-21T15:22:09.3281635+00:00',
      fi2sessionidentity: {},
      fi2messagecount: '1',
      fi2messagetask: {
        fi2verb: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
        fi2noun: {
          fi2class_code: {},
          fi2class_scheme: {},
        },
      },
      fi2confirmation: 'false',
    },
    fi2partner: [
      {
        id: '12345',
        fi2part_ids: {
          fi2_id: [
            {
              usage: 'PartnerId',
              $t: '12345',
            },
            {
              usage: 'Ssn',
              $t: '811010-1010',
            },
          ],
        },
        fi2part_class: {
          fi2class_code: '16',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_005_003',
            fi2scheme_name: 'Klassificering FI2Partner',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
          },
        },
        fi2part_value: [
          {
            fi2value_code: 'ChangedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'ChangedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2015-11-18T09:21:06',
          },
          {
            fi2value_code: 'CreatedBy',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: 'Script',
          },
          {
            fi2value_code: 'CreatedDate',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2015-11-18T09:21:06',
          },
          {
            fi2value_code: 'ETag',
            fi2value_scheme: {
              fi2scheme_id: 'VB001_005_001',
              fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
              fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
            },
            fi2value_value: '2015-11-18T09:21:06.660',
          },
        ],
        fi2part_name: {
          lang: 'sv',
          usage: 'Default',
          $t: 'Anna',
        },
        fi2part_fullname: 'Anna Jansson',
        fi2part_reference: 'En referens.',
        fi2part_tel: [
          {
            usage: 'Home',
            $t: '12345-123456',
          },
          {
            usage: 'Work',
            $t: '12345-123456',
          },
          {
            usage: 'MobilePrivate',
            $t: '12345-123456',
          },
          {
            usage: 'MobileWork',
            $t: '12345-123456',
          },
          {
            usage: 'Fax',
            $t: '12345-123456',
          },
        ],
        fi2part_email: [
          {
            usage: 'Private',
            $t: '12345@12345.com',
          },
          {
            usage: 'Work',
            $t: '12345@12345.com',
          },
        ],
        fi2part_web: 'www.exempelurl12345.com',
        fi2part_address: [
          {
            guid: 'DECE1A01-9ADA-495C-9341-426A198F61F4',
            fi2addr_class: {
              fi2class_code: '03',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_007_003',
                fi2scheme_name: 'Klassificering av adresser',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
              },
            },
            fi2addr_descr: {
              lang: 'sv',
              $t: 'Exempeladress',
            },
            fi2addr_addrline: [
              {
                usage: 'Street',
                $t: 'Norravägen 277',
              },
              {
                usage: 'CO',
                $t: '278',
              },
              {
                usage: 'Box',
                $t: '798',
              },
              {
                usage: 'Att',
                $t: '836',
              },
            ],
            fi2addr_zipcode: '79111',
            fi2addr_city: 'Askersund',
            fi2addr_country: 'SE',
            fi2addr_region: 'Norr',
            fi2addr_tel: [
              {
                usage: 'Home',
                $t: '00570239',
              },
              {
                usage: 'Work',
                $t: '05464241',
              },
              {
                usage: 'MobilePrivate',
                $t: '070851010',
              },
              {
                usage: 'MobileWork',
                $t: '070808788',
              },
              {
                usage: 'Fax',
                $t: '81388',
              },
            ],
          },
          {
            guid: 'AEB1A38F-A0BB-4132-A1A0-E7998A09C37D',
            fi2addr_class: {
              fi2class_code: '05',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_007_003',
                fi2scheme_name: 'Klassificering av adresser',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
              },
            },
            fi2addr_descr: {
              lang: 'sv',
              $t: 'Postal exempeladress',
            },
            fi2addr_addrline: [
              {
                usage: 'Street',
                $t: 'Exempelgatan 234',
              },
              {
                usage: 'CO',
                $t: '234',
              },
              {
                usage: 'Box',
                $t: '222',
              },
              {
                usage: 'Att',
                $t: '289',
              },
            ],
            fi2addr_zipcode: '22233',
            fi2addr_city: 'Yrboda',
            fi2addr_country: 'SE',
            fi2addr_region: 'Mitt',
            fi2addr_tel: [
              {
                usage: 'Home',
                $t: '20789655',
              },
              {
                usage: 'Work',
                $t: '20889656',
              },
              {
                usage: 'MobilePrivate',
                $t: '20789645',
              },
              {
                usage: 'MobileWork',
                $t: '20889636',
              },
              {
                usage: 'Fax',
                $t: '20789695',
              },
            ],
          },
        ],
        fi2part_contact: {
          guid: '61676032-7619-499F-B0AC-75F1849EFA18',
          fi2contact_class: {
            fi2class_code: 'Primary',
            fi2class_scheme: {
              fi2scheme_id: 'CB001_006_001',
              fi2scheme_name: 'Klassificering av kontaktinformation',
              fi2scheme_url: 'http://www.fi2.se/classlist/CB001_006_001.xml',
            },
          },
          fi2cont_fname: 'Anna',
          fi2cont_mname: 'Eva',
          fi2cont_lname: 'Ibrahimovic',
          fi2cont_fullname: 'Anna Ibrahimovic',
          fi2cont_tel: [
            {
              usage: 'Home',
              $t: '9566-463288',
            },
            {
              usage: 'Work',
              $t: '5938-191763',
            },
            {
              usage: 'MobilePrivate',
              $t: '070-9167130',
            },
            {
              usage: 'MobileWork',
              $t: '12345',
            },
            {
              usage: 'Fax',
              $t: '12345',
            },
          ],
          fi2cont_email: [
            {
              usage: 'Private',
              $t: 'Anna.Ibrahimovic@Hemma.se',
            },
            {
              usage: 'Work',
              $t: 'Anna.Ibrahimovic@jobbet.se',
            },
          ],
          fi2cont_address: {
            guid: 'DECE1A01-9ADA-495C-9341-426A198F61F4',
            fi2addr_class: {
              fi2class_code: '03',
              fi2class_scheme: {
                fi2scheme_id: 'CA000_007_003',
                fi2scheme_name: 'Klassificering av adresser',
                fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
              },
            },
            fi2addr_descr: {
              lang: 'sv',
              $t: 'Exempeladress',
            },
            fi2addr_addrline: [
              {
                usage: 'Street',
                $t: 'Norravägen 277',
              },
              {
                usage: 'CO',
                $t: '278',
              },
              {
                usage: 'Box',
                $t: '798',
              },
              {
                usage: 'Att',
                $t: '836',
              },
            ],
            fi2addr_zipcode: '79111',
            fi2addr_city: 'Askersund',
            fi2addr_country: 'SE',
            fi2addr_region: 'Norr',
            fi2addr_tel: [
              {
                usage: 'Home',
                $t: '00570239',
              },
              {
                usage: 'Work',
                $t: '05464241',
              },
              {
                usage: 'MobilePrivate',
                $t: '070851010',
              },
              {
                usage: 'MobileWork',
                $t: '070808788',
              },
              {
                usage: 'Fax',
                $t: '81388',
              },
            ],
          },
        },
      },
    ],
  },
}

export const fi2SinglePartnerJson = {
  fi2partner: {
    id: '12345',
    xmlns: 'http://www.fi2.se/schemas/1.31',
    fi2part_ids: {
      fi2_id: [
        {
          usage: 'PartnerId',
          $t: '12345',
        },
        {
          usage: 'Ssn',
          $t: '811010-1010',
        },
      ],
    },
    fi2part_class: {
      fi2class_code: '16',
      fi2class_scheme: {
        fi2scheme_id: 'CA000_005_003',
        fi2scheme_name: 'Klassificering FI2Partner',
        fi2scheme_url: 'http://www.fi2.se/classlist/CA000_005_003.xml',
      },
    },
    fi2part_value: [
      {
        fi2value_code: 'ChangedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'ChangedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:21:06',
      },
      {
        fi2value_code: 'CreatedBy',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: 'Script',
      },
      {
        fi2value_code: 'CreatedDate',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:21:06',
      },
      {
        fi2value_code: 'ETag',
        fi2value_scheme: {
          fi2scheme_id: 'VB001_005_001',
          fi2scheme_name: 'Tillåtna värden för alla typer av fi2objekt',
          fi2scheme_url: 'http://www.fi2.se/valuelist/VB001_005_001.xml',
        },
        fi2value_value: '2015-11-18T09:21:06.660',
      },
    ],
    fi2part_name: {
      lang: 'sv',
      usage: 'Default',
      $t: 'Anna',
    },
    fi2part_fullname: 'Anna Jansson',
    fi2part_reference: 'En referens.',
    fi2part_tel: [
      {
        usage: 'Home',
        $t: '12345-123456',
      },
      {
        usage: 'Work',
        $t: '12345-123456',
      },
      {
        usage: 'MobilePrivate',
        $t: '12345-123456',
      },
      {
        usage: 'MobileWork',
        $t: '12345-123456',
      },
      {
        usage: 'Fax',
        $t: '12345-123456',
      },
    ],
    fi2part_email: [
      {
        usage: 'Private',
        $t: '12345@12345.com',
      },
      {
        usage: 'Work',
        $t: '12345@12345.com',
      },
    ],
    fi2part_web: 'www.exempelurl12345.com',
    fi2part_address: [
      {
        guid: 'DECE1A01-9ADA-495C-9341-426A198F61F4',
        fi2addr_class: {
          fi2class_code: '03',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_007_003',
            fi2scheme_name: 'Klassificering av adresser',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
          },
        },
        fi2addr_descr: {
          lang: 'sv',
          $t: 'Exempeladress',
        },
        fi2addr_addrline: [
          {
            usage: 'Street',
            $t: 'Norravägen 277',
          },
          {
            usage: 'CO',
            $t: '278',
          },
          {
            usage: 'Box',
            $t: '798',
          },
          {
            usage: 'Att',
            $t: '836',
          },
        ],
        fi2addr_zipcode: '79111',
        fi2addr_city: 'Askersund',
        fi2addr_country: 'SE',
        fi2addr_region: 'Norr',
        fi2addr_tel: [
          {
            usage: 'Home',
            $t: '00570239',
          },
          {
            usage: 'Work',
            $t: '05464241',
          },
          {
            usage: 'MobilePrivate',
            $t: '070851010',
          },
          {
            usage: 'MobileWork',
            $t: '070808788',
          },
          {
            usage: 'Fax',
            $t: '81388',
          },
        ],
      },
      {
        guid: 'AEB1A38F-A0BB-4132-A1A0-E7998A09C37D',
        fi2addr_class: {
          fi2class_code: '05',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_007_003',
            fi2scheme_name: 'Klassificering av adresser',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
          },
        },
        fi2addr_descr: {
          lang: 'sv',
          $t: 'Postal exempeladress',
        },
        fi2addr_addrline: [
          {
            usage: 'Street',
            $t: 'Exempelgatan 234',
          },
          {
            usage: 'CO',
            $t: '234',
          },
          {
            usage: 'Box',
            $t: '222',
          },
          {
            usage: 'Att',
            $t: '289',
          },
        ],
        fi2addr_zipcode: '22233',
        fi2addr_city: 'Yrboda',
        fi2addr_country: 'SE',
        fi2addr_region: 'Mitt',
        fi2addr_tel: [
          {
            usage: 'Home',
            $t: '20789655',
          },
          {
            usage: 'Work',
            $t: '20889656',
          },
          {
            usage: 'MobilePrivate',
            $t: '20789645',
          },
          {
            usage: 'MobileWork',
            $t: '20889636',
          },
          {
            usage: 'Fax',
            $t: '20789695',
          },
        ],
      },
    ],
    fi2part_contact: {
      guid: '61676032-7619-499F-B0AC-75F1849EFA18',
      fi2contact_class: {
        fi2class_code: 'Primary',
        fi2class_scheme: {
          fi2scheme_id: 'CB001_006_001',
          fi2scheme_name: 'Klassificering av kontaktinformation',
          fi2scheme_url: 'http://www.fi2.se/classlist/CB001_006_001.xml',
        },
      },
      fi2cont_fname: 'Anna',
      fi2cont_mname: 'Eva',
      fi2cont_lname: 'Ibrahimovic',
      fi2cont_fullname: 'Anna Ibrahimovic',
      fi2cont_tel: [
        {
          usage: 'Home',
          $t: '9566-463288',
        },
        {
          usage: 'Work',
          $t: '5938-191763',
        },
        {
          usage: 'MobilePrivate',
          $t: '070-9167130',
        },
        {
          usage: 'MobileWork',
          $t: '12345',
        },
        {
          usage: 'Fax',
          $t: '12345',
        },
      ],
      fi2cont_email: [
        {
          usage: 'Private',
          $t: 'Anna.Ibrahimovic@Hemma.se',
        },
        {
          usage: 'Work',
          $t: 'Anna.Ibrahimovic@jobbet.se',
        },
      ],
      fi2cont_address: {
        guid: 'DECE1A01-9ADA-495C-9341-426A198F61F4',
        fi2addr_class: {
          fi2class_code: '03',
          fi2class_scheme: {
            fi2scheme_id: 'CA000_007_003',
            fi2scheme_name: 'Klassificering av adresser',
            fi2scheme_url: 'http://www.fi2.se/classlist/CA000_007_003.xml',
          },
        },
        fi2addr_descr: {
          lang: 'sv',
          $t: 'Exempeladress',
        },
        fi2addr_addrline: [
          {
            usage: 'Street',
            $t: 'Norravägen 277',
          },
          {
            usage: 'CO',
            $t: '278',
          },
          {
            usage: 'Box',
            $t: '798',
          },
          {
            usage: 'Att',
            $t: '836',
          },
        ],
        fi2addr_zipcode: '79111',
        fi2addr_city: 'Askersund',
        fi2addr_country: 'SE',
        fi2addr_region: 'Norr',
        fi2addr_tel: [
          {
            usage: 'Home',
            $t: '00570239',
          },
          {
            usage: 'Work',
            $t: '05464241',
          },
          {
            usage: 'MobilePrivate',
            $t: '070851010',
          },
          {
            usage: 'MobileWork',
            $t: '070808788',
          },
          {
            usage: 'Fax',
            $t: '81388',
          },
        ],
      },
    },
  },
}
