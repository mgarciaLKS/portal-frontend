import { IconButton, StatusTag, Chip } from 'cx-portal-shared-components'
import { GridRenderCellParams, GridColDef } from '@mui/x-data-grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

import {
  CompanyApplicationInfo,
  RegistrationRequestDocument,
} from 'features/admin/registration/types'
import dayjs from 'dayjs'

/*
{
      field: 'companyInfo',
      headerName: `${t(
        'content.admin.registration-requests.columns.companyinfo'
      )}`,
      flex: 2,
      sortable: false,
      renderCell: (params: GridRenderCellParams<CompanyApplicationInfo>) => (
        <div>
          <p style={{ margin: '3px 0' }}>{params?.value?.companyName}</p>
          <p style={{ margin: '3px 0' }}>{params?.value?.userEmail}</p>
          <span>{params?.value?.bpn}</span>
        </div>
      ),
    },
    {
      field: 'contracts',
      headerName: `${t(
        'content.admin.registration-requests.columns.documents'
      )}`,
      flex: 2,
      sortable: false,
      renderCell: (
        params: GridRenderCellParams<Array<RegistrationRequestContract>>
      ) => (
        <div className="document-cell-container">
          {params?.value?.map((contract) => {
            return (
              <div className="document-cell-line">
                <ArticleOutlinedIcon />
                <a href={contract?.document} rel="noreferrer">
                  {contract?.name}
                </a>
              </div>
            )
          })}
        </div>
      ),
    },
    {
      field: 'detail',
      headerName: `${t('content.admin.registration-requests.columns.details')}`,
      flex: 1,
      align: 'center',
      sortable: false,
      renderCell: () => (
        <IconButton
          color="secondary"
          size="small"
          style={{ alignSelf: 'center' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
    {
      field: 'status',
      headerName: `${t('content.admin.registration-requests.columns.state')}`,
      align: 'center',
      flex: 1.2,
      sortable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        if (params.value === 'pending')
          return (
            <div className="state-cell-container">
              <Chip
                {...{
                  color: 'secondary',
                  variant: 'filled',
                  label: `${t(
                    'content.admin.registration-requests.buttondecline'
                  )}`,
                  type: 'decline',
                  onClick: () => console.log('Decline clicked event'),
                  withIcon: true,
                }}
              />

              <Chip
                {...{
                  color: 'secondary',
                  variant: 'filled',
                  label: `${t(
                    'content.admin.registration-requests.buttonconfirm'
                  )}`,
                  type: 'confirm',
                  onClick: () => console.log('Confirm clicked event'),
                  withIcon: true,
                }}
              />
            </div>
          )
        else
          return (
            <div className="state-cell-container">
              <StatusTag
                color={params.value === 'confirmed' ? 'confirmed' : 'declined'}
                label={t(
                  `content.admin.registration-requests.cell${params.value}`
                )}
              />
            </div>
          )
      },
    },
 */

// Columns definitions of Registration Request page Data Grid
export const RegistrationRequestsTableColumns = (
  translationHook: any
): Array<GridColDef> => {
  const { t } = translationHook()

  return [
    {
      field: 'applicationId',
      headerName: `${t('content.admin.registration-requests.columns.request')}`,
      description: `${t(
        'content.admin.registration-requests.columns.requestDescription'
      )}`,
      flex: 1,
    },
    {
      field: 'dateCreated',
      headerName: `${t('content.admin.registration-requests.columns.date')}`,
      flex: 1,
      renderCell: (params: GridRenderCellParams<string>) => (
        <span>{dayjs(params?.value).format('DD.MM.YYYY')}</span>
      ),
    },

    {
      field: 'companyInfo',
      headerName: `${t(
        'content.admin.registration-requests.columns.companyinfo'
      )}`,
      flex: 2,
      sortable: false,
      renderCell: (params: GridRenderCellParams<CompanyApplicationInfo>) => (
        <div>
          <p style={{ margin: '3px 0' }}>{params?.value?.companyName}</p>
          <p style={{ margin: '3px 0' }}>{params?.value?.email}</p>
          <span>{params?.value?.bpn}</span>
        </div>
      ),
    },

    {
      field: 'documents',
      headerName: `${t(
        'content.admin.registration-requests.columns.documents'
      )}`,
      flex: 2,
      sortable: false,
      renderCell: (
        params: GridRenderCellParams<Array<RegistrationRequestDocument>>
      ) => (
        <div className="document-cell-container">
          {params?.value?.map((contract) => {
            return (
              <div className="document-cell-line">
                <ArticleOutlinedIcon />
                <a href={contract?.document} rel="noreferrer">
                  {contract?.name}
                </a>
              </div>
            )
          })}
        </div>
      ),
    },

    {
      field: 'detail',
      headerName: `${t('content.admin.registration-requests.columns.details')}`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: () => (
        <IconButton
          color="secondary"
          size="small"
          style={{ alignSelf: 'center' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
    {
      field: 'status',
      headerName: `${t('content.admin.registration-requests.columns.state')}`,
      align: 'center',
      headerAlign: 'center',
      flex: 1.2,
      sortable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        if (params.value === 'SUBMITTED')
          return (
            <div className="state-cell-container">
              <Chip
                {...{
                  color: 'secondary',
                  variant: 'filled',
                  label: `${t(
                    'content.admin.registration-requests.buttondecline'
                  )}`,
                  type: 'decline',
                  onClick: () => console.log('Decline clicked event'),
                  withIcon: true,
                }}
              />

              <Chip
                {...{
                  color: 'secondary',
                  variant: 'filled',
                  label: `${t(
                    'content.admin.registration-requests.buttonconfirm'
                  )}`,
                  type: 'confirm',
                  onClick: () => console.log('Confirm clicked event'),
                  withIcon: true,
                }}
              />
            </div>
          )
        else
          return (
            <div className="state-cell-container">
              <StatusTag
                color={params.value === 'CONFIRMED' ? 'confirmed' : 'declined'}
                label={t(
                  `content.admin.registration-requests.cell${params.value.toLowerCase()}`
                )}
              />
            </div>
          )
      },
    },
  ]
}
