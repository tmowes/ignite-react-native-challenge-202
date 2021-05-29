import React, { useState, useCallback, useEffect } from 'react'

import { useFocusEffect } from '@react-navigation/native'

import { SearchBar } from '../../components/SearchBar'
import { LoginDataItem } from '../../components/LoginDataItem'
import { Container, LoginList, EmptyListContainer, EmptyListMessage } from './styles'
import { useStorageData } from '../../contexts'
import { LoginDataProps } from './types'

export function Home() {
  const { loadLogins } = useStorageData()
  const [searchListData, setSearchListData] = useState<LoginDataProps[]>([])
  const [data, setData] = useState<LoginDataProps[]>([])

  const loadData = useCallback(async () => {
    try {
      const result = await loadLogins()
      setSearchListData(result)
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }, [loadLogins])

  const handleFilterLoginData = (search: string) => {
    if (search !== '') {
      const dataFiltered = data.filter(item => item.title.includes(search))
      setSearchListData(dataFiltered)
    } else {
      setSearchListData(data)
    }
  }

  useEffect(() => {
    loadData()
  }, [loadData])

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [loadData])
  )
  return (
    <Container>
      <SearchBar
        placeholder="Pesquise pelo nome do serviço"
        onChangeText={value => handleFilterLoginData(value)}
      />
      <LoginList
        keyExtractor={item => item.id}
        data={searchListData}
        ListEmptyComponent={
          <EmptyListContainer>
            <EmptyListMessage>Nenhum item a ser mostrado</EmptyListMessage>
          </EmptyListContainer>
        }
        renderItem={({ item: loginData }) => (
          <LoginDataItem
            title={loginData.title}
            email={loginData.email}
            password={loginData.password}
          />
        )}
      />
    </Container>
  )
}
