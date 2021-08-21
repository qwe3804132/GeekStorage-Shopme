package com.shopme.admin.brand;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.shopme.common.entity.Brand;

public interface BrandRepository extends PagingAndSortingRepository<Brand, Integer> {

	public Long countById(Integer id);

	public Brand findByName(String name);

	@Query("SELECT  b from Brand b where  b.name like %?1%")
	public Page<Brand> findAll(String keyword, Pageable pageable);

	@Override
	@Query("select NEW Brand(b.id,b.name) from Brand b Order by b.name ASC")
	public List<Brand> findAll();

}
